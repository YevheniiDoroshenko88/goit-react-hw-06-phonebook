import React from 'react';
import { FilterDiv, FilterInput } from './BookFilter.styled.jsx';
import { setFilter } from '../../redux/Slice.jsx';
import { useDispatch } from 'react-redux';

export function BookFilter() {
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(setFilter(e.target.value));
    console.log(e.target.value);
  };

  return (
    <FilterDiv>
      Filter
      <FilterInput type="text" name="filter" onChange={e => onChange(e)} />
    </FilterDiv>
  );
}
