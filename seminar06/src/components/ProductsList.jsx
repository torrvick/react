import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/joy/Table';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import ProductDialog from './ProductDialog';
import { openAddDialog, openEditDialog } from '../store/appSlice';
import { removeProduct } from '../store/productsSlice';

function ProductsList() {
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();

	return (
		<>
			<Table
				sx={{
					'& tr > :last-child,  & tr > :nth-last-child(3)': { textAlign: 'right' },
					'& tr > :nth-last-child(2)': { textAlign: 'center' },
					'--TableCell-height': '20px',
					'& tbody tr': {
						'&:hover td:last-child > *': {
							visibility: 'visible',
						},
					},
					'& td:last-child > *': {
						visibility: 'hidden',
					},
					'& thead th': { borderBottom: '2px solid #ccc' },
					width: '100%',
					paddingTop: '20px',
					marginBottom: '20px',
				}}
				stripe={products.length % 2 === 0 ? 'even' : 'odd'}
				borderAxis="none"
				// hoverRow
				stickyHeader
			>
				<thead>
					<tr>
						<th style={{ width: '15%' }}>Название</th>
						<th style={{ width: '55%' }}>Описание</th>
						<th>Цена</th>
						<th>Наличие</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr key={product.id}>
							<td>
								<Typography level="title-sm">{product.name}</Typography>
							</td>
							<td>{product.description}</td>
							<td>
								<Typography level="title-sm">{product.price}</Typography>
							</td>
							<td>
								<Typography textColor={product.available ? 'green' : 'orange'}>
									{product.available ? 'В наличии' : 'Отсутствует'}
								</Typography>
							</td>
							<td>
								<IconButton
									onClick={() => dispatch(openEditDialog(product))}
									sx={{
										'--IconButton-size': '30px',
									}}
								>
									<EditIcon fontSize="small" sx={{ color: 'grey' }} />
								</IconButton>
								<IconButton
									onClick={() => dispatch(removeProduct(product.id))}
									sx={{
										'--IconButton-size': '30px',
									}}
								>
									<DeleteOutlineIcon fontSize="small" sx={{ color: 'red' }} />
								</IconButton>
							</td>
						</tr>
					))}
				</tbody>
			</Table>

			<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Button
					onClick={() => {
						dispatch(openAddDialog());
					}}
				>
					Новый товар
				</Button>
			</Box>
			<ProductDialog />
		</>
	);
}

export default ProductsList;
