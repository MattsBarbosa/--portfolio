import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { Description, ButtonTheme, SidebarContainer } from './styles'

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Matheus Barbosa</Title>
        <Paragraph type="secundario" fontSize={16}>
          MattsBarbosa
        </Paragraph>
        <Description type="principal" fontSize={12}>
          Full Stack Java
        </Description>
        <ButtonTheme>Trocar tema</ButtonTheme>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
