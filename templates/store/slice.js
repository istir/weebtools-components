

export const sliceTemplate = (sliceName, capitalizedName, upperCaseName) => `import { createSlice } from '@reduxjs/toolkit';

export const ${upperCaseName} = '${upperCaseName}';

export interface ${capitalizedName}State {

}

const initialState: ${capitalizedName}State = {

};

export const ${sliceName}Slice = createSlice({
  name: ${upperCaseName},
  initialState,
  reducers: {
    // : (state, action: PayloadAction<>) => ({
    //   ...state,
    //   : [...action.payload, ...state.]
    // })
  },
  extraReducers: (builder) =>
    builder
    //   .addCase(Action.fulfilled, (state, action) => ({
    //     ...state,
    //     : action.payload
    //   }))
});

// export const ${sliceName}Action = createAsyncAction<API.Request.Tag, Tag>(
//   \`${upperCaseName}/${sliceName}\`
// );

// export const { } = ${sliceName}Slice.actions;

export const ${sliceName}Reducer = ${sliceName}.reducer;`
