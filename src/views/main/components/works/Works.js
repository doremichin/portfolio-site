import styled from 'styled-components'

import SectionTitle from '../../../shared/title/SectionTitle';
import { appData } from '../../../../data';
import { ContentContainer, SectionContainer } from '../../../shared/layout/Layout.Styled';
import GridList from '../../../shared/list/GridList';
import WorksItem from './WorksItem';

export default function Works() {
  return (
    <Container name="works">
      <SectionTitle title={appData.works.title} />
      <ContentContainer>
        <GridList data={appData.works.list}>
          {(item) => <WorksItem item={item} />}
        </GridList>
      </ContentContainer>
    </Container>
  )
}

const Container = styled(SectionContainer)`
`;
