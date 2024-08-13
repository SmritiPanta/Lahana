"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Loader } from "@/components/icons/loader";

import { useCountdown } from "@/hooks/use-countdown";
import { decodeText } from "@/lib/encoder";
import { cn } from "@/lib/utils";
import { verifyOtp } from "@/lib/api";

const OTP_TIMEOUT = 5 * 1000; // 5 seconds

const verifyOTPSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 characters long."),
});

type VerifyOTPInput = z.infer<typeof verifyOTPSchema>;

export const VerifyOTPForm = ({ token }: { token: string }) => {
  const form = useForm<VerifyOTPInput>({
    resolver: zodResolver(verifyOTPSchema),
  });

  const [isPending, startTransition] = useTransition();

  const {
    minutes,
    seconds,
    restart: restartCountdown,
  } = useCountdown(OTP_TIMEOUT);

  const router = useRouter();

  const isTimerUp = minutes === 0 && seconds === 0;

  const handleResend = () => {
    // Send code again
    restartCountdown();
    toast.error("Not implemented yet.");
  };

  const onSubmit = (values: VerifyOTPInput) => {
    console.log("otp submitted");
    startTransition(async () => {
      try {
        const { data } = await verifyOtp({
          input: {
            phone: decodeText(token),
            otp: values.otp,
          },
        });
        console.log(data);

        if (data?.verifyOtp?.__typename === "CurrentUser") {
          router.push(`/login`);
          return;
        }

        if (data.verifyOtp?.__typename === "VerifyOtpError") {
          form.setError("otp", {
            type: "manual",
            // message: data.verifyOtp.message,
            message: "error occured",
          });
          return;
        }

        throw new Error("Something went wrong.");
      } catch (e) {
        form.setError("otp", {
          type: "manual",
          message: (e as Error).message,
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-14 font-heading"
      >
        <FormField
          control={form.control}
          name="otp"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-4">
          <div className="text-center font-heading">
            Send code again?{" "}
            {isTimerUp ? (
              <button
                type="button"
                onClick={handleResend}
                className={cn("font-bold text-primary", {
                  "text-primary/50": isPending,
                })}
                disabled={isPending}
              >
                Resend
              </button>
            ) : (
              <span className="font-bold">
                {minutes} : {seconds.toString().padStart(2, "0")}
              </span>
            )}
          </div>
          <Button className="w-full" disabled={isPending}>
            {isPending ? (
              <>
                <Loader className="mr-2 size-4 animate-spin" />
                <span>Verifying...</span>
              </>
            ) : (
              "Verify"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
