export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshed = state => state.auth.isRefreshed;
export const selectIsLoading = state => state.auth.getIsLoading;
export const selectIsLogOut = state => state.auth.isLogOut;

export const selectRefreshToken = state => state.auth.refreshToken;
export const selectAccessToken = state => state.auth.accessToken;

export const selectName = state => state.auth.user?.name;
export const selectEmail = state => state.auth.user.email;
