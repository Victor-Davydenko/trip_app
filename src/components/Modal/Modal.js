import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalOpen } from '../../store/modalSlice';

const modalRoot = document.querySelector('#modal_wrapper');
const Modal = ({ children, title }) => {
	const isModalOpen = useSelector((state) => state.modalSlice.isModalOpen);
	const dispatch = useDispatch();
	const modalElement = useMemo(() => document.createElement('div'), []);
	const modal = <div className='modal' onClick={() => dispatch(setIsModalOpen(false))}>
		<div className='modal__inner' onClick={(e) => e.stopPropagation()}>
			<div className='modal__header'>
				<div className='modal__title'>{title}</div>
				<div className='modal__btn-holder'>
					<span className='modal__close-btn' onClick={() => dispatch(setIsModalOpen(false))}>X</span>
				</div>
			</div>
			<div className='modal__content'>
				{children}
			</div>
		</div>
	</div>;

	useEffect(() => {
		if (isModalOpen) {
			modalRoot.appendChild(modalElement);

			return () => {
				modalRoot.removeChild(modalElement);
			};
		}
	});
	return isModalOpen && createPortal(modal, modalElement);
};

export default Modal;
