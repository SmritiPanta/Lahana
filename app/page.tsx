import Link from 'next/link';


import { GiForkKnifeSpoon } from 'react-icons/gi';


import { Contact } from '@/components/layout/contact';

import { Footer } from '@/components/layout/footer';


import { Middle } from '@/components/layout/middle';
import { New } from '@/components/layout/new';
import { Review } from '@/components/layout/review';

import { Upper } from '@/components/layout/upper';
import { Subscription } from '@/components/layout/subscription';
import { Lunch } from '@/components/layout/lunch';
import { Faq } from '@/components/layout/faq';


const IndexPage = () => (
  <>
    <Upper />
    <New />
    <Middle />
    
    <Lunch/>
    <Subscription/>
    <Contact />
    
    <Review />
    <Faq/>
    <Footer />
  </>
);

export default IndexPage;
