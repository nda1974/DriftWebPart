import pnp ,{setup}from "sp-pnp-js";

import * as React from 'react';
import { escape } from '@microsoft/sp-lodash-subset';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
export interface INewsTickerContainerProps{
  // listItems:any[];
  description:string;
}
export interface INewsTickerContainerState{
  listItems:any[];
  
}

export default class NewsTickerContainer extends React.Component<INewsTickerContainerProps, INewsTickerContainerState> {
  public constructor(props:INewsTickerContainerProps,state:INewsTickerContainerState){  
        super(props);
    
        this.state= {
                      listItems:[]
                    }

                    setup({
                      sp: {
                          headers: {
                              Accept: "application/json; odata=nometadata"
                          },
                          baseUrl:"https://lbforsikring.sharepoint.com/sites/intra"
                      }
                  });
    
                  pnp.sp.web.lists.getByTitle("LBNewsTicker").items.select("Title,Active,Severity").filter('Active eq 1').top(5).get().then(
                    (data:any[])=>{this.setState({listItems:data})}
                  );
        
}
  public render(): React.ReactElement<INewsTickerContainerProps> {
    try {
          // pnp.sp.web.lists.getByTitle("LBNewsTicker").items.select("Title,Active,Severity").filter('Active eq 1').top(5).get().then(
          //   (data:any[])=>{this.setState({listItems:data})}
          // );
        
          return (
            <div >
                    {
                          this.state.listItems.map((item)=>{
                          
                          return  <MessageBar 
                                  messageBarType={MessageBarType.severeWarning}>
                                      {item.Title}
                                  </MessageBar>
                      })}
                  
            </div>
          );

          
        } 
    catch (error) {
      console.log(error)
    }
  }
}
