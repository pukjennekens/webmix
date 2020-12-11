import React from 'react';
import { connect } from 'react-redux';

import ListItem from '../list-item/list-item.component';
import AddListItem from '../add-list-item/add-list-item.component';

const List = ({ listItems }) => {
  return (
    <div className='py-2 px-3 border border-dark rounded'>
      <h2 className='my-3 ml-3'>Lijstje</h2>

      {listItems.length > 0 ? (
        listItems.map((listItem) => (
          <ListItem
            key={listItem.id}
            listItemId={listItem.id}
            content={listItem.content}
          />
        ))
      ) : (
        <h4 className='ml-3'>Je hebt nog geen items in je lijstje</h4>
      )}

      <AddListItem />
    </div>
  );
};

const mapStateToProps = (state) => ({
  listItems: state.list,
});

export default connect(mapStateToProps)(List);
