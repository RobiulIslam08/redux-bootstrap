// const logger = (state) => (next)=> (action)=>{
// 	console.group(action.type);
// 	console.info("pre state", state.getState())
// 	const result = next(action)
// 	console.log('next state', state.getState())
	
// 	console.groupEnd()
// 	return result
// }
// export default logger;