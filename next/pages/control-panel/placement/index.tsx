import PlacementTable from '@/modules/placement/components/PlacementTable';
import {
  PartnerPlacementPageContainer,
  PlacementButtonContainer,
} from '@/modules/placement/styles';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import Link from 'next/link';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import React from 'react';

const breadcrumbsItems = [
  {label: 'Панель управления', url: '/control-panel'},
  {label: 'Жилье'},
];
const PartnerPlacementPage = () => {
  return (
    <PartnerPlacementPageContainer>
      <PlacementButtonContainer>
        <Breadcrumbs paths={breadcrumbsItems} />
        <Link href={'/control-panel/placement/add'}>
          <ButtonBasic dark>Добавить жилье</ButtonBasic>
        </Link>
      </PlacementButtonContainer>
      <PlacementTable />
    </PartnerPlacementPageContainer>
  );
};

export default PartnerPlacementPage;
