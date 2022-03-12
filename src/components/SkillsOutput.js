import { Component } from "react"

class SkillsOutput extends Component{
    render(){
        const {outputSkills} = this.props;
        return (
            <p>{outputSkills[0].value}</p>
        )
    }
}

export default SkillsOutput