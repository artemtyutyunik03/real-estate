import React from 'react';
import {ChakraProvider, theme, Tabs, TabList, Tab, TabPanels, TabPanel} from '@chakra-ui/react';
import Header from "../header";
import ForRentPage from "../pages/forRentPage";
import ForBuyPage from "../pages/forBuyPage";
import styles from './app.module.css'
function App() {

  return (
    <ChakraProvider theme={theme}>
      <div className={styles.container}>
        <Header/>
          <Tabs size='md' variant='enclosed'>
              <TabList key={'tab-list'}>
                  <Tab key={'for-rent-tab'}>For rent</Tab>
                  <Tab key={'for-sale-tab'}>For sale</Tab>
              </TabList>
              <TabPanels>
                  <TabPanel key={'for-rent-component'}>
                      <ForRentPage/>
                  </TabPanel>
                  <TabPanel key={'for-sale-component'}>
                     <ForBuyPage/>
                  </TabPanel>
              </TabPanels>
          </Tabs>
      </div>
    </ChakraProvider>
  );
}

export default App;
