import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph type="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laboriosam
      eius magnam dolorem quasi, quos omnis voluptatibus obcaecati beatae
      veritatis soluta incidunt eligendi error, ipsa exercitationem laborum
      nihil consequatur sapiente.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=MattsBarbosa&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MattsBarbosa&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
