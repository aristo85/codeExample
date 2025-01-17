import React, {useState} from 'react';
import {
  AccordionBody,
  AccordionTitle,
  AccordionTitleBlock,
  ArrowSelect,
} from '@/modules/core/components/Accordion/styles';

interface AccordionProps {
  title: {
    open: string;
    closed: string;
  };
  arrowIsShown: boolean;
  children: React.ReactNode;
  underlined?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  arrowIsShown,
  underlined = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AccordionTitleBlock onClick={() => setIsOpen(prev => !prev)}>
        <AccordionTitle underlined={underlined}>
          {isOpen ? title.open : title.closed}
        </AccordionTitle>
        {arrowIsShown && <ArrowSelect isOpen={isOpen} stroke="#1D7ABD" />}
      </AccordionTitleBlock>
      {React.Children.count(children) > 0 && isOpen && (
        <AccordionBody>{children}</AccordionBody>
      )}
    </>
  );
};

export default Accordion;
