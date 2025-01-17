import {
  PartnerPlacementPageContainer,
  PlacementButtonContainer,
} from '@/modules/placement/styles';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import Link from 'next/link';
import GuidePartnerTable from '@/modules/control-panel/guide/table';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import React from 'react';

const breadcrumbsItems = [
  {label: 'Панель управления', url: '/control-panel'},
  {label: 'Досуг'},
  {label: 'Гиды'},
];
const PartnerExcursionPage = () => {
  return (
    <PartnerPlacementPageContainer>
      <PlacementButtonContainer>
        <Breadcrumbs paths={breadcrumbsItems} />
        <Link href={'/control-panel/guide/add?step=1'}>
          <ButtonBasic dark>Добавить Гида</ButtonBasic>
        </Link>
      </PlacementButtonContainer>
      <GuidePartnerTable />
    </PartnerPlacementPageContainer>
  );
};

export default PartnerExcursionPage;
