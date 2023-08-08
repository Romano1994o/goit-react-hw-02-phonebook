import PropTypes from 'prop-types';


export const Filter = ({ onChange }) => {
    return (
      <div>
        <label>
          Find contacts by name
          <input type="text" name="filter" onChange={onChange} />
        </label>
      </div>
    );
  };
  
  Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
  };