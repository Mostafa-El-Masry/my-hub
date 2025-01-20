import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <Grid templateAreas={{ base: `"nav main"`, lg: `"nav nav" "aside main"` }}>
      <Show above="lg">
        <GridItem area="nav" bg="coral">
          <NavBar />
        </GridItem>
      </Show>
      <GridItem area="aside" bg="gold">
        aside
      </GridItem>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
