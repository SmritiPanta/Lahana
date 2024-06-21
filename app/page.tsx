import Link from 'next/link';


import { GiForkKnifeSpoon } from 'react-icons/gi';


import { Contact } from '@/components/layout/contact';

import { Footer } from '@/components/layout/footer';


import { Middle } from '@/components/layout/middle';
import { New } from '@/components/layout/new';
import { Review } from '@/components/layout/review';
import { Team } from '@/components/layout/team';
import { Upper } from '@/components/layout/upper';
import { Subscription } from '@/components/layout/subscription';
import { Lunch } from '@/components/layout/lunch';


const IndexPage = () => (
  <>
    <Upper />
    <New />
    <Middle />
    
    <Lunch/>
    <Subscription/>
    <Contact />
    <Team />
    <Review />
    <Footer />
  </>
);

export default IndexPage;
