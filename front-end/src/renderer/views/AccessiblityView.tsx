import styled from "styled-components";
import * as React from "react";
import { View } from "_utils/store";
import { ActionType, store } from "_/utils/store";
import MenuItem_ from "../MenuItem_";

const AccessiblityViewStyled = styled.div`
  margin: 0 8px;
  width: 100%;
`;

const Title = styled.h1`
  margin: 15px 15px 0px 15px;
  font-size: 24px;
`;

const AccessiblityView = () => {
  const greeting = "Hello Function Component!";
  const context = React.useContext(store);

  return (
    <AccessiblityViewStyled>
      <Title>{View.Accessiblity.valueOf()}</Title>
      <MenuItem_
        optionName={"ASL Subtitle"}
        optionDescription={
          "If enabled, Boom will translate your ASL gesture and generate subtitle in video feed"
        }
        toggled={false}
        onToggle={(value: boolean) => {
          if (context && context.dispatch) {
            context.dispatch({
              type: ActionType.toggleAccesibilityConfig,
              payload: {
                aslTranslation: value,
              },
            });
          }
        }}
      />
    </AccessiblityViewStyled>
  );
};

export default AccessiblityView;