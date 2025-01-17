import React, {FC} from 'react';
import {
  CheckMarkContainer,
  DataTermsAndPrivacyPolicyBlock,
  InfoBlock,
  InfoBlockDescription,
  InfoBlockTitle,
} from './styles';

export interface DataTermsAndPrivacyPolicyProps {
  items: {text: string; title: string; icon?: React.ReactNode}[];
}
const DataTermsAndPrivacyPolicy: FC<DataTermsAndPrivacyPolicyProps> = ({
  items,
}) => {
  return (
    <DataTermsAndPrivacyPolicyBlock>
      {items.map((item, index) => {
        return (
          <InfoBlock key={index}>
            {item.icon ? item.icon : <CheckMarkContainer />}
            <InfoBlockTitle>{item.title}</InfoBlockTitle>
            <InfoBlockDescription>{item.text}</InfoBlockDescription>
          </InfoBlock>
        );
      })}
    </DataTermsAndPrivacyPolicyBlock>
  );
};

export default DataTermsAndPrivacyPolicy;
