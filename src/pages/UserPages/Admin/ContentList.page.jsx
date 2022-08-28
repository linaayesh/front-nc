import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { NotFound } from 'pages';
import { useAppDispatch, useAppSelector } from 'hooks';
import { ContentList, MatchContent } from 'components/Dashboard';
import { getContentById, getUsers } from 'store/matchContent/thunk';

function ContentListPage() {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { contentId } = useParams();
  const {
    isLoading,
    curContent,
  } = useAppSelector((state) => state.matchContents);

  useEffect(() => {
    if (contentId) {
      dispatch(getContentById(contentId));
      dispatch(getUsers());
    }
  }, [contentId]);

  return (
    <div>
      {
        pathname === '/dashboard/contentlist'
          ? <ContentList />
          : !isLoading
            ? curContent
              ? <MatchContent />
              : <NotFound link="/dashboard/contentlist" pageClassName="not-found-dashboard-container" title="Go to contents page" />
            : <div>Loading...</div>
      }
    </div>
  );
}

export default ContentListPage;
