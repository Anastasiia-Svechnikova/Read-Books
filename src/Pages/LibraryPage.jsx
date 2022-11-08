import LibraryForm from 'components/Library/LibraryForm/LibraryForm';
import LibraryList from 'components/Library/LibraryList/LibraryList';
import MobileLibrary from 'components/Library/MobileLibrary/MobileLibrary';
import Spinner from 'components/Spinner/Spinner';
import useTranslation from 'Hooks/useTranslations';
import EmptyLibraryInfo from 'components/Library/EmptyLibraryInfo/EmptyLibraryInfo';

import STATUS from 'components/Constants/status';
import BOOK_CATEGORY from 'components/Constants/bookCategories';

import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccessToken } from 'Redux/Auth/authSelectors';
import { useEffect } from 'react';
import { getUserBooksThunk } from 'Redux/Books/booksOperations';
import { selectAllBooks, selectBooksStatus } from 'Redux/Books/booksSelectors';
import { getCurrentPlanning } from 'Redux/Planning/planningOperations';
import { selectIsPlanningActive } from 'Redux/Planning/planningSelectors';


const LibraryPage = () => {
	const translation = useTranslation();
	const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });
	const status = useSelector(selectBooksStatus);
	const accessToken = useSelector(selectAccessToken);
	const isPlanningActive = useSelector(selectIsPlanningActive);
	

	const isLoading = status === STATUS.pending;
	const dispatch = useDispatch();
	const allBooks = useSelector(selectAllBooks);

	const isLibraryEmpty =
		Object.values(allBooks).every(el => el.length === 0) &&
		status === STATUS.fulfilled;

	useEffect(() => {
		if (accessToken) {
			dispatch(getUserBooksThunk());
			if (isPlanningActive){

			 dispatch(getCurrentPlanning()); }
		}
	}, [accessToken, dispatch, isPlanningActive]);


	return isLoading ? (
		<Spinner />
	) : isDesktopOrTablet ? (
		<>
				<LibraryForm isMobile={ !isDesktopOrTablet} />
			{isLibraryEmpty ? (
				<EmptyLibraryInfo />
			) : (
				<>
					<LibraryList
						category={BOOK_CATEGORY.finishedReading}
						going={translation.libraryListHeaders.going}
					/>
					<LibraryList category={BOOK_CATEGORY.currentlyReading} />
					<LibraryList category={BOOK_CATEGORY.goingToRead} />
					
				</>
			)}
		</>
	) : (
		<MobileLibrary isLibraryEmpty={isLibraryEmpty} />
	);
};
export default LibraryPage;
