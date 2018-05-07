import * as React from 'react';
import styles from './LbNewsticker.module.scss';
import { ILbNewstickerProps } from './ILbNewstickerProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class LbNewsticker extends React.Component<ILbNewstickerProps, {}> {
  public render(): React.ReactElement<ILbNewstickerProps> {
    return (
      <div className={ styles.lbNewsticker }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
