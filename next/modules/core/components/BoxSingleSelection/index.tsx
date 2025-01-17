import React, {forwardRef} from 'react';
import {
  Box,
  CheckIcon,
  Label,
  Root,
  Subtitle,
  Title,
  TitleContainer,
  Wraper,
} from './styles';

type BoxOption = {
  id: string;
  title: string;
  subtitle: string;
};

type Props = {
  options: BoxOption[];
  selected: string;
  onChange: (id: string) => void;
  label?: string;
};

const BoxSingleSelection = forwardRef<HTMLDivElement, Props>(
  ({options, selected, onChange, label}, ref) => {
    return (
      <Root>
        {!!label && <Label>{label}</Label>}
        <Wraper>
          {options.map(el => (
            <Box
              key={el.id}
              selected={selected === el.id}
              onClick={() => onChange(el.id)}>
              <TitleContainer>
                <CheckIcon checked={selected === el.id} />
                <Title>{el.title}</Title>
              </TitleContainer>
              <Subtitle>{el.subtitle}</Subtitle>
            </Box>
          ))}
        </Wraper>
      </Root>
    );
  },
);

BoxSingleSelection.displayName = 'BoxSingleSelection';

export default BoxSingleSelection;
