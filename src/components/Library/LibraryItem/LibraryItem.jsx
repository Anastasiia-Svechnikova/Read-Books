import createRatingStars from 'Utils/RatingStars';
import Modal from 'components/Modal';
import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import {
	Button,
	FinishedReadingItemWrapper,
	ItemWrapper,
	OverflowText,
	StarList,
} from './LibraryItem.styled';
import { useState } from 'react';
import { ResumeModal } from 'components/ResumeModal/ResumeModal';


const LibraryItem = ({
	title,
	author,
	publishYear,
	fill,
	pagesTotal,
	isFinishedReading,
	rating,
	id,
}) => {
	const [modalOpen, setModalOpen] = useState(false);
	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return isFinishedReading ? (
		<FinishedReadingItemWrapper>
			<BookIcon fill={fill} width={22} height={17} />
			<OverflowText>{title}</OverflowText>
			<OverflowText>{author}</OverflowText>
			<span>{publishYear}</span>
			<span>{pagesTotal}</span>
			<StarList>{createRatingStars(rating)}</StarList>
			<Button onClick={openModal} aria-label="Open resume form">
				Resume
			</Button>
			{modalOpen && (
				<Modal onClose={closeModal}>
					<ResumeModal initRating={rating} id={id} onClose={closeModal} />
				</Modal>
			)}
		</FinishedReadingItemWrapper>
	) : (
		<ItemWrapper>
			<BookIcon fill={fill} width={22} height={17} />
			<OverflowText>{title}</OverflowText>
			<OverflowText>{author}</OverflowText>
			<span>{publishYear}</span>
			<span>{pagesTotal}</span>
		</ItemWrapper>
	);
};
export default LibraryItem;
