import {useEffect, useState} from 'react';
import {TableGridParam} from '../interfaces';
import qs from 'qs';
import {useSearchParams} from 'react-router-dom';

const DefaultParams = {
  page: 1,
  s: 'Pokemon',
  y: '2024',
};

function normalizeQueryParams(queryParams: TableGridParam): TableGridParam {
  const params: TableGridParam = DefaultParams;

  if (Object.keys(queryParams).length) {
    params.page = Number(queryParams.page) || DefaultParams.page;
    params.s = queryParams.s || DefaultParams.s;
    params.y = queryParams.y || DefaultParams.y;
    params.type = queryParams.type;
  }

  return params;
}

export const useDataGridParams = () => {
  const [, setSearchParams] = useSearchParams();

  const [params, setParams] = useState<TableGridParam>(() => {
    const queryParams = qs.parse(
      new URLSearchParams(window.location.search).toString()
    ) as unknown as TableGridParam;
    return normalizeQueryParams(queryParams);
  });

  useEffect(() => {
    setSearchParams(qs.stringify(params));
  }, [params, setSearchParams]);

  return {params, setParams};
};
