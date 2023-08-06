import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SortSelect from '../common/SortSelect/SortSelect';
import Input from '../common/Input/Input';
import { setSearchQuery, setSortOrder } from '../../store/scheduledTripSlice';

const FilterBar = () => {
	const dispatch = useDispatch();
	const { searchTripQuery, sortTripOrder } = useSelector((state) => state.scheduledTripSlice);

	const sortOptions = [{ value: 'default', label: 'default' }, { value: 'asc', label: 'ascending' }, { value: 'desc', label: 'descending' }];
	const onSearch = (value) => {
		dispatch(setSearchQuery(value));
	};
	const onSort = (value) => {
		dispatch(setSortOrder(value));
	};
	return (
		<div className='filters'>
			<Input
				id='search'
				value={searchTripQuery}
				onChange={onSearch}
				placeholder='Search your trip'
				className='filter_input search'
			/>
			<SortSelect
				options={sortOptions}
				value={sortTripOrder}
				onSort={onSort}
				label='Sort by start date'
				className='filter_input select'
			/>
		</div>
	);
};

export default FilterBar;
