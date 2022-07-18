import { FC, useEffect } from 'react';
import styled from 'styled-components';
// components
import ButtonStory from 'modules/core/components/button/button.story';
import DataListStory from 'modules/core/components/data-list/data-list.story';
import IconStory from 'modules/core/components/icon/icon.story';
import IconButtonStory from 'modules/core/components/icon-button/icon-button.story';
import InputStory from 'modules/core/components/input/input.story';
import InputNumberStory from 'modules/core/components/input-number/input-number.story';
import ModalStory from 'modules/core/components/modal/modal.story';
import PaperStory from 'modules/core/components/paper/paper.story';
import SelectStory from 'modules/core/components/select/select.story';
import SocialButtonStory from 'modules/core/components/social-button/social-button.story';
import SpinnerStory from 'modules/core/components/spinner/spinner.story';
import TableStory from 'modules/core/components/table/table.story';
import TableDateStory from 'modules/core/components/table-date/table-date.story';
import AutocompleteInputStory from 'modules/core/components/autocomplete-input/autocomplete-input.story';
import ToastStory from 'modules/core/containers/toast-provider/toast-provider.story';
import PaginationStory from 'modules/core/components/pagination/pagination.story';
import DateInputStory from 'modules/core/components/date-input/date-input.story';
import PhoneInputStory from 'modules/core/components/phone-input/phone-input.story';
// theme
import { defaultTheme } from 'styles/default-theme';
import { paypeopleTheme } from 'styles/paypeople-theme';

const Title = styled.h1`
  margin-top: 30px;
  font-size: 22px;
`;

const Subtitle = styled.p`
  margin-top: 15px;
  font-size: 18px;
`;

const Section = styled.section`
  padding: 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.palette.common.gray};
`;

const SectionTitle = styled.h2`
  margin-bottom: 15px;
  color: ${(props) => props.theme.palette.common.gray};
  line-height: 20px;
`;

const SectionContent = styled.div``;

const Dev: FC = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // @ts-ignore
      window.defaultTheme = defaultTheme;
      // @ts-ignore
      window.paypeopleTheme = paypeopleTheme;
    }
  }, []);

  return (
    <div>
      <Title>Paycos style guide</Title>
      <Subtitle>
        You can access defaultTheme and payopleTheme object directly in the
        console
      </Subtitle>
      <Section>
        <SectionTitle>Input: modules/core/components/input</SectionTitle>
        <SectionContent>
          <InputStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>
          PhoneInputNumber: modules/core/components/phone-input
        </SectionTitle>
        <SectionContent>
          <PhoneInputStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>
          InputNumber: modules/core/components/input-number
        </SectionTitle>
        <SectionContent>
          <InputNumberStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>
          DateInput: modules/core/components/date-input
        </SectionTitle>
        <SectionContent>
          <DateInputStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Spinner: modules/core/components/spinner</SectionTitle>
        <SectionContent style={{ display: 'flex' }}>
          <SpinnerStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>
          IconButton: modules/core/components/icon-button
        </SectionTitle>
        <SectionContent style={{ display: 'flex' }}>
          <IconButtonStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Icon: modules/core/components/icon</SectionTitle>
        <SectionContent>
          <IconStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Modal: modules/core/components/modal</SectionTitle>
        <SectionContent>
          <ModalStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>SocialButton: modules/core/components/modal</SectionTitle>
        <SectionContent style={{ display: 'flex' }}>
          <SocialButtonStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Button: modules/core/components/button</SectionTitle>
        <SectionContent>
          <ButtonStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>
          Pagination: modules/core/components/pagination
        </SectionTitle>
        <SectionContent>
          <PaginationStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Paper: modules/core/components/paper</SectionTitle>
        <SectionContent style={{ display: 'flex' }}>
          <PaperStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Select: modules/core/components/select</SectionTitle>
        <SectionContent style={{ display: 'flex' }}>
          <SelectStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>
          AutocompleteInput: modules/core/components/autocomplete-input
        </SectionTitle>
        <SectionContent style={{ display: 'flex' }}>
          <AutocompleteInputStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Table: modules/core/components/table</SectionTitle>
        <SectionContent style={{ display: 'flex' }}>
          <TableStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>
          TableDateStory: modules/core/components/table-date
        </SectionTitle>
        <SectionContent style={{ display: 'flex' }}>
          <TableDateStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>DataList: modules/core/components/data-list</SectionTitle>
        <SectionContent>
          <DataListStory />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>
          Toast: modules/core/containers/toast-provider
        </SectionTitle>
        <SectionContent>
          <ToastStory />
        </SectionContent>
      </Section>
    </div>
  );
};

export default Dev;
