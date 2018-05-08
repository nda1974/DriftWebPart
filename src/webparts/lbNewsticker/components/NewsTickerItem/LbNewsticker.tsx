import * as React from 'react';
import styles from './LbNewsticker.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';


export interface INewstickerItemProps {
  description: string;
}

export default class NewstickerItem extends React.Component<INewstickerItemProps, {}> {
  public constructor(props:INewstickerItemProps,{}){  
        super(props);  
        
        
}
  public render(): React.ReactElement<INewstickerItemProps> {

    return (
      <div className={ styles.lbNewsticker }>
        <div className="ms-Grid-row">
            {this.props.description}
        </div>
      </div>
    );
  }
}
