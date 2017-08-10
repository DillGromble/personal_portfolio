import axios from 'axios'


//---------------------------------constants---------------------------------//

const GET_PROJECTS = 'GET_PROJECTS'


//------------------------------action creators------------------------------//

const getProjects = projects => ({
  type: GET_PROJECTS,
  projects
})


//----------------------------------reducer----------------------------------//

const initialState = {
  allProjects: []
}

export default (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_PROJECTS:
      newState.allProjects = action.projects
      break

    default:
      return state
  }

  return newState
}


//-----------------------------------thunks----------------------------------//

export const getAllProjects = () =>
  dispatch =>
    axios.get('/api/projects')
      .then(res => dispatch(getProjects(res.data)))
      .catch(err => console.error(err))
