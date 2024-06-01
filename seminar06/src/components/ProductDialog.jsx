import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Checkbox from '@mui/joy/Checkbox';
import Textarea from '@mui/joy/Textarea';
import Add from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDialog } from '../store/appSlice';
import { addProduct } from '../store/productsSlice';

function ProductDialog() {
	const isDialogOpen = useSelector((state) => state.appState.dialogOpen);
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [available, setAvailable] = useState(true);

	const clearForm = () => {
		setName('');
		setDescription('');
		setPrice('');
		setAvailable(true);
	};

	return (
		<Modal
			open={isDialogOpen}
			onClose={() => {
				dispatch(toggleDialog());
				clearForm();
			}}
		>
			<ModalDialog sx={{ width: '50vw' }}>
				<DialogTitle>Новый товар</DialogTitle>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						dispatch(addProduct({ name, description, price, available }));
						clearForm();
					}}
				>
					<Stack spacing={2}>
						<FormControl>
							<FormLabel>Название</FormLabel>
							<Input
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
								autoFocus
								required
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Описание</FormLabel>
							<Textarea
								value={description}
								onChange={(e) => {
									setDescription(e.target.value);
								}}
								minRows={2}
								maxRows={10}
								required
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Цена</FormLabel>
							<Input
								value={price}
								onChange={(e) => {
									setPrice(e.target.value);
								}}
								type="number"
								slotProps={{
									input: {
										min: 1,
									},
								}}
								required
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Цена</FormLabel>
							<Checkbox
								checked={available}
								onChange={(e) => {
									setAvailable(e.target.checked);
								}}
								label="Наличие"
							/>
						</FormControl>
						<Button type="submit">Submit</Button>
					</Stack>
				</form>
			</ModalDialog>
		</Modal>
	);
}

export default ProductDialog;
