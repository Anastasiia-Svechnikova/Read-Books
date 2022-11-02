import useTranslation from 'Hooks/useTranslations';
import MobileTrainingBookItem from 'components/MobileTrainingBookItem/MobileTrainingBookItem';
import {
	ItemWrapper,
	ListHeaders,
	List,
	CheckBox,
	TrashButton,
} from '../TrainingBookList/TrainingBookList.styled';
import {
	selectPlanningBooks,
	selectShowResultsSection,
} from 'Redux/Planning/planningSelectors';
import { deletePlanningBook} from 'Redux/Planning/planningOperations';
import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import { ReactComponent as TrashIcon } from 'Assets/svg/delete.svg';
import { ReactComponent as CheckIcon } from 'Assets/svg/CheckBox.svg';
import { useDispatch, useSelector } from 'react-redux';

const TrainingBookList = ({isMobile}) => {
	const translation = useTranslation();
	const dispatch = useDispatch();
	
	const books = useSelector(selectPlanningBooks);
	const isShowResultsSection = useSelector(selectShowResultsSection);

	const handleDelete = _id => {
		dispatch(deletePlanningBook(_id));
	};

	return (
		<div>
			{!isMobile && <ListHeaders>
				<span>{translation.trainingBookList.title}</span>
				<span>{translation.trainingBookList.author}</span>
				<span>{translation.trainingBookList.year}</span>
				<span>{translation.trainingBookList.pages}</span>
			</ListHeaders>}
			<List id="planning-list">
				{books.length !== 0 &&
					books?.map(
						({
							title,
							author,
							publishYear,
							pagesTotal,
							_id,
							pagesFinished,
						}) => {
							return (
							<li key={_id}>
								{isMobile ?
									<MobileTrainingBookItem
										handleDelete={handleDelete}
										title={title}
										author={author}
										publishYear={publishYear}
										pagesTotal={pagesTotal}
										pagesFinished={pagesFinished}
										id={_id}
									/>
									:
									<ItemWrapper>
									{!isShowResultsSection && (
										<BookIcon fill="#A6ABB9" width={22} height={17} />
									)}
									{isShowResultsSection && (
										<CheckBox>
													{pagesFinished >= pagesTotal && <CheckIcon/>}
										</CheckBox>
									)}
									<span>{title}</span>
									<span>{author}</span>
									<span>{publishYear}</span>
									<span>{pagesTotal}</span>
									{!isShowResultsSection && books.length > 1 &&(
										<TrashButton type='button' onClick={() => handleDelete(_id)}>
											<TrashIcon width={22} height={17} />
										</TrashButton>
									)}
								</ItemWrapper>}
							</li>
						)}
					)}
			</List>
		</div>
	);
};

export default TrainingBookList;
