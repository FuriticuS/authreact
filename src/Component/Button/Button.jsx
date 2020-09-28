import React from 'react';
import {Button as BaseButton} from 'antd';
import PropTypes from "prop-types";
import classNames from 'classnames';

const Button = (props) => {
    return (
        <BaseButton {...props} className={classNames("button", props.classNames)}/>
    );
};

//описание какие пропсы должен получить button
Button.propTypes = {
    className:PropTypes.string,
}

export default Button;
