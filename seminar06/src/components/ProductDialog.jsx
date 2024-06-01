import React, { useState, useEffect } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import Stack from '@mui/joy/Stack';
import Checkbox from '@mui/joy/Checkbox';
import Textarea from '@mui/joy/Textarea';
import { useSelector, useDispatch } from 'react-redux';
import { closeDialog } from '../store/appSlice';
import { addProduct, updateProduct } from '../store/productsSlice';

function ProductDialog() {
	const { open, mode, data } = useSelector((state) => state.appState.dialog);
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [available, setAvailable] = useState(true);

	useEffect(() => {
		if (mode === 'edit') {
			setName(data.name);
			setDescription(data.description);
			setPrice(data.price);
			setAvailable(data.available);
		}
	}, [mode, data]);

	const clearForm = () => {
		setName('');
		setDescription('');
		setPrice('');
		setAvailable(true);
	};

	const handleSubmit = () => {
		const product = { name, description, price, available };
		if (mode === 'add') {
			dispatch(addProduct(product));
		} else if (mode === 'edit') {
			dispatch(updateProduct({ id: data.id, ...product }));
		}
	};

	return (
		<Modal
			open={open}
			onClose={() => {
				dispatch(closeDialog());
				clearForm();
			}}
		>
			<ModalDialog sx={{ width: '50vw' }}>
				<DialogTitle>{mode === 'add' ? 'Новый товар' : 'Изменение товара'}</DialogTitle>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit();
						clearForm();
						dispatch(closeDialog());
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
						<Button type="submit">Сохранить</Button>
					</Stack>
				</form>
			</ModalDialog>
		</Modal>
	);
}

export default ProductDialog;
