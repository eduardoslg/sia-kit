import { Card, Flex, Grid, Select } from "@atmoutsourcing/siakit";

export function Maintenance(){


  const option = [{label: "teste", value: 1}]

  return (
      <Grid columns={"1fr"} gap margin flex>
        <Card gap flex height="20vh">
            <p>teste1</p>
        </Card>
        <Card gap flex height="75vh">
            <p>teste</p>
            <p>teste</p>
        </Card>
      </Grid>
  )
}