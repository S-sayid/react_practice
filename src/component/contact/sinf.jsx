import React from 'react'

export function Sinfrom(props){
	return(
		<div>
			<input type={props.type} name={props.name} />
		</div>
		)
}
export function Textarea(props){
	return(
		<textarea name={props.mess}></textarea> 
		)
}
export function Select(props){
	return(
	<select name={props.name}>
		<option value={props.value[0]}>{props.con[0]}</option>
		<option value={props.value[1]}>{props.con[1]}</option>
		<option vlaue={props.value[2]}>{props.con[2]}</option>
		<option value={props.value[3]}>{props.con[3]}</option>
	</select>
	)
}