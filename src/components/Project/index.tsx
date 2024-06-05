import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Paragraph type="secundario">Lista de tarefas feita com VueJS</Paragraph>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Project
