import React from 'react'
import { Responsive, Grid, Image, Segment } from 'semantic-ui-react'

const Home = () => (
  <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
        <Image src='./assets/images/map.png' />
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
        <Image src='./assets/images/pie.png' />
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
        <Image src='./assets/images/mbta.png' />
      </Segment>
    </Grid.Column>
  </Grid>
)

export default Home