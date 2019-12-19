import React from "react";
import { Text } from "react-native";
import { Button } from "react-native-elements";

class PNLastStep extends React.Component {
  state = {
    answers: [],
    correct: true
  };

  handleAnswer = async value => {
    await this.setState({ answers: [...this.state.answers, value] });

    if (this.state.answers.length === this.props.steps.length - 1) {
      const answer = this.state.answers.join("");
      this.setState({ correct: false, answers: [] });
      this.props.validate(answer);
    }
  };

  render() {
    const { steps, currentStep } = this.props;
    const { answers, correct } = this.state;
    return (
      <>
        {/* on peut virer le test ici du coup */}
        <Text>{steps[currentStep] && steps[currentStep].instruction}</Text>
        {this.state.correct ? (
          <Text></Text>
        ) : (
          <Text
            style={{
              fontSize: 12,
              color: "red"
            }}
          >
            Mauvaise réponse, allez on essaie à nouveau !{" "}
          </Text>
        )}
        {steps.map(
          step =>
            !step.isLast && (
              <Button
                key={step.instruction}
                title={step.solution}
                titleStyle={{
                  color: "black",
                  fontSize: 14
                }}
                buttonStyle={{
                  flexDirection: "column",
                  marginLeft: 105,
                  marginTop: 10,
                  width: 90,
                  height: 40,
                  borderRadius: 25,
                  backgroundColor: answers.includes(step.solution)
                    ? "#C1EA69"
                    : "#D9C6BA"
                }}
                onPress={() =>
                  !answers.includes(step.solution) &&
                  this.handleAnswer(step.solution)
                }
              />
            )
        )}
      </>
    );
  }
}

export default PNLastStep;
