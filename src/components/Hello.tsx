import * as React from "react";
import { InputForm } from './InputForm';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div>
             <h1>Hello75611 from {this.props.compiler} and {this.props.framework}!</h1>
             <InputForm />
        </div>
    }
}