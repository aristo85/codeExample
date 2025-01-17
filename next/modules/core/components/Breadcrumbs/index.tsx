import {
  Nav,
  List,
  ListItem,
  BreadcrumbLabel,
  BreadcrumbCurrentPath,
  BreadcrumbLink,
} from './styles';
import React, {FC} from 'react';
import LeftArrowIcon from '@/modules/core/components/icons/LeftArrowIcon';

export interface BreadcrumbsProps {
  paths: {
    label: string;
    url?: string;
  }[];
  isMobile?: boolean;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({paths, isMobile}) => {
  let displayedPaths = paths;
  let shouldShowDots = false;

  if (isMobile && paths.length > 2) {
    displayedPaths = paths.slice(-2);
    shouldShowDots = true;
  }

  return (
    <Nav>
      <List>
        {shouldShowDots && (
          <ListItem>
            <span>...</span>
            <LeftArrowIcon />
          </ListItem>
        )}

        {displayedPaths.map((path, index) => (
          <React.Fragment key={index}>
            <ListItem>
              {path.url && index !== displayedPaths.length - 1 ? (
                <BreadcrumbLink href={path.url} passHref>
                  <BreadcrumbLabel>{path.label}</BreadcrumbLabel>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbCurrentPath>{path.label}</BreadcrumbCurrentPath>
              )}
            </ListItem>
            {displayedPaths.length - 1 > index && (
              <ListItem>
                <LeftArrowIcon />
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
    </Nav>
  );
};

export default Breadcrumbs;
