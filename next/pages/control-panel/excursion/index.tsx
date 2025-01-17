import {
  PartnerPlacementPageContainer,
  PlacementButtonContainer,
} from '@/modules/placement/styles';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import Link from 'next/link';
import ExcursionTable from '@/modules/control-panel/excursion/table';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import React from 'react';

const breadcrumbsItems = [
  {label: 'Панель управления', url: '/control-panel'},
  {label: 'Досуг'},
  {label: 'Экскурсии'},
];
const PartnerExcursionPage = () => {
  return (
    <PartnerPlacementPageContainer>
      <PlacementButtonContainer>
        <Breadcrumbs paths={breadcrumbsItems} />
        <Link href={'/control-panel/excursion/add?step=1'}>
          <ButtonBasic dark>Добавить экскурсию</ButtonBasic>
        </Link>
      </PlacementButtonContainer>
      <ExcursionTable />
    </PartnerPlacementPageContainer>
  );
};

export default PartnerExcursionPage;
