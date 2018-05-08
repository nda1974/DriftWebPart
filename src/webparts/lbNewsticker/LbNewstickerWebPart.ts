import pnp from "sp-pnp-js";
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'LbNewstickerWebPartStrings';
import NewsTickerContainer, { INewsTickerContainerProps } from "./components/NewsTickerContainer/NewsTickerContainer";

export interface ILbNewstickerWebPartProps {
  description: string;
}

export default class LbNewstickerWebPart extends BaseClientSideWebPart<ILbNewstickerWebPartProps > {

  public render(): void {

        const element: React.ReactElement<INewsTickerContainerProps > = React.createElement(
          NewsTickerContainer,
          {
            description: this.properties.description
          }
        );

        ReactDom.render(element, this.domElement);
    
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Redigér webdel"
          },
          groups: [
            {
              groupName: "Overskrift",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: "Angiv supplerende tekst til nyheden"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
