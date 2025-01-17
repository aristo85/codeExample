import {ExcursionButtonContainer, ExcursionPageContainer} from './styles';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import Link from 'next/link';
import ExcursionTable from '@/modules/control-panel/excursion/table';

const PartnerExcursionPage = () => {
  return (
    <ExcursionPageContainer>
      <ExcursionButtonContainer>
        <Link href={'/control-panel/excursion/add'}>
          <ButtonBasic dark>Добавить экскурсию</ButtonBasic>
        </Link>
      </ExcursionButtonContainer>
      <ExcursionTable />
    </ExcursionPageContainer>
  );
};

export default PartnerExcursionPage;
