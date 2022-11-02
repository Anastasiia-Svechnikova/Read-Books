import useTranslation from 'Hooks/useTranslations';

import { Headers } from './FinishedReadingListHeaders.styled';

const FinishedReadingListHeaders = () => {
	const translation = useTranslation();
	return (
		<Headers>
			<span>{translation.readingListHeaders.title}</span>
			<span>{translation.readingListHeaders.author}</span>
			<span>{translation.readingListHeaders.year}</span>
			<span>{translation.readingListHeaders.pages}</span>
			<span>{translation.readingListHeaders.rating}</span>
		</Headers>
	);
};
export default FinishedReadingListHeaders;
