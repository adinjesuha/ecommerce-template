import React from 'react';
import * as ReactShare from 'react-share';

import { ShareButtonsWrapper, ButtonWrapper } from './styles';

const ShareButtons = ({ buttons, location }) => {
  return (
    <ShareButtonsWrapper>
      {buttons.map((button, index) => {
        let buttonName = button + 'ShareButton';
        let buttonIcon = button + 'Icon';
        let ShareButton = ReactShare[buttonName]

        let Icon = ReactShare[buttonIcon];

        return (
          <ButtonWrapper key={index}>
            <ShareButton url={location} media={location} key={buttonName}>
              <Icon size={38} round={true} key={buttonIcon} />
            </ShareButton>
          </ButtonWrapper>
        );
      })}
    </ShareButtonsWrapper>
  );
};

export default ShareButtons;