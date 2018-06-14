import React, { Component } from 'react';
import {Paper, Tabs} from 'material-ui';
import { Tab } from 'material-ui/Tabs'


class Footer extends Component {
	render(){
		return( <Paper>
            <Tabs
              value={0}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Paper>
			)
	}
}
export default Footer