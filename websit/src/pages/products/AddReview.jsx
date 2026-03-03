import { Box, Button, Input, InputLabel, Rating } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import useAddReview from '../../hooks/useAddReview';
import Swal from 'sweetalert2';

function AddReview({ productId }) {
  const { mutate: AddReviewMutation, isPending } = useAddReview(productId);
  const { register, handleSubmit, control, reset } = useForm();

  const onSubmit = (values) => {
      console.log(" reviwe  is  :", values);
    if (!values.Rating || values.Rating === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Rating required!',
        text: 'Please select a star rating before submitting.',
      });
      return;
    }

    AddReviewMutation(
      { Rating: values.Rating, Comment: values.Comment },
      {
        onSuccess: () => {
          reset();
          Swal.fire({
            icon: 'success',
            title: 'Review added! 🎉',
            text: 'Thank you for your feedback.',
            timer: 2000,
            showConfirmButton: false,
          });
        },
        onError: () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again.',
          });
        },
      }
    );
  };

  const onCancel = () => reset();

  return (
    <Box component={'section'}>
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
        <InputLabel>add comment ...</InputLabel>
        <Box sx={{ display: 'flex' }}>
          <Input
            fullWidth
            {...register('Comment')}
            sx={{ border: 'none', textDecoration: 'none' }}
          />
          <Controller
            name='Rating'
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <Rating
                {...field}
                value={field.value}
                onChange={(e, newValue) => field.onChange(newValue)}
              />
            )}
          />
        </Box>
        <Box>
          <Button type='submit' disabled={isPending}>
            {isPending ? 'Sending...' : 'Add'}
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddReview;