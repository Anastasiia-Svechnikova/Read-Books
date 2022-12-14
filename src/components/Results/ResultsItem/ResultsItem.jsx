import useTranslation from 'Hooks/useTranslations';
import { normalizeCurrentDate } from 'Utils/timeValidationFunctions';
import {
	DateText,
	PagesCountSpan,
	PagesCountText,
	ResultsPageItem,
	TimeUpdateText,
} from './ResultsItem.styled';


export default function ResultsItem({ data: { time, pagesCount } }) {
	const date = normalizeCurrentDate(time.split(' ')[0]) 
	const timeUpdate = time.split(' ')[1]
	const translation = useTranslation();

	return (
		<ResultsPageItem>
			<DateText>{date}</DateText>
			<TimeUpdateText>{timeUpdate}</TimeUpdateText>
			<PagesCountText>
				{pagesCount} <PagesCountSpan> {translation.results.pages}</PagesCountSpan>
			</PagesCountText>
		</ResultsPageItem>
	);
}

