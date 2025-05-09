"use client";
import React from 'react'
import "@/styles/modal.css"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}


export default function Modal({isOpen, onClose, title, description}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}