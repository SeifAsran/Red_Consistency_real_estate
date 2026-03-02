import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  MapPin,
  Home,
  Calendar,
  Maximize2,
  BedDouble,
  Bath,
  Car,
  Banknote,
  UploadCloud,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import './ListUnitForm.css';

const steps = [
  { key: 'basic', label: 'Basic Info' },
  { key: 'specs', label: 'Property Specs' },
  { key: 'media', label: 'Media & Pricing' },
];

const stepVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 40 : -40,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -40 : 40,
  }),
};

export default function ListUnitForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState([]);
  const [form, setForm] = useState({
    title: '',
    location: '',
    propertyType: '',
    yearBuilt: '',
    squareFeet: '',
    bedrooms: '',
    bathrooms: '',
    parking: '',
    price: '',
  });

  const canGoBack = stepIndex > 0 && !submitted;
  const canGoNext = stepIndex < steps.length - 1 && !submitted;

  const stepTitle = useMemo(() => steps[stepIndex]?.label ?? '', [stepIndex]);

  const onChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const onFilesSelected = (e) => {
    const next = Array.from(e.target.files || []);
    setFiles(next);
  };

  const goNext = () => {
    if (!canGoNext) return;
    setDirection(1);
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const goBack = () => {
    if (!canGoBack) return;
    setDirection(-1);
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="list-unit-wrap">
      <div className="list-unit-card">
        <div className="list-unit-stepper" role="list" aria-label="Submission steps">
          {steps.map((step, idx) => {
            const isActive = idx === stepIndex && !submitted;
            const isCompleted = idx < stepIndex || submitted;
            return (
              <div
                key={step.key}
                role="listitem"
                className={
                  isActive
                    ? 'stepper-item is-active'
                    : isCompleted
                      ? 'stepper-item is-completed'
                      : 'stepper-item'
                }
              >
                <div className="stepper-dot">
                  {isCompleted ? <CheckCircle2 size={18} /> : <span>{idx + 1}</span>}
                </div>
                <div className="stepper-meta">
                  <span className="stepper-label casko-font">{step.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        {submitted ? (
          <div className="list-unit-success">
            <CheckCircle2 size={44} />
            <h3 className="casko-font">Submission Received</h3>
            <p>
              Your unit has been received. Our advisors will contact you shortly to curate your
              listing.
            </p>
          </div>
        ) : (
          <form className="list-unit-form" onSubmit={onSubmit}>
            <div className="list-unit-header">
              <h3 className="casko-font">{stepTitle}</h3>
              <p>
                Provide the details below. You can refine and curate your listing with our advisors
                after submission.
              </p>
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={steps[stepIndex].key}
                className="list-unit-step"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              >
                {stepIndex === 0 && (
                  <div className="list-unit-grid">
                    <div className="field">
                      <label htmlFor="lu-title" className="casko-font">
                        Title
                      </label>
                      <div className="input-row">
                        <Home size={18} />
                        <input
                          id="lu-title"
                          type="text"
                          value={form.title}
                          onChange={onChange('title')}
                          placeholder="e.g., Vista Heights Skyline Penthouse"
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="lu-location" className="casko-font">
                        Location
                      </label>
                      <div className="input-row">
                        <MapPin size={18} />
                        <select
                          id="lu-location"
                          value={form.location}
                          onChange={onChange('location')}
                        >
                          <option value="" disabled>
                            Select location
                          </option>
                          <option value="zayed">Sheikh Zayed</option>
                          <option value="new-cairo">New Cairo</option>
                          <option value="north-coast">North Coast</option>
                          <option value="new-capital">New Capital</option>
                        </select>
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="lu-type" className="casko-font">
                        Property Type
                      </label>
                      <div className="input-row">
                        <Home size={18} />
                        <select
                          id="lu-type"
                          value={form.propertyType}
                          onChange={onChange('propertyType')}
                        >
                          <option value="" disabled>
                            Select type
                          </option>
                          <option value="apartment">Apartment</option>
                          <option value="villa">Villa</option>
                          <option value="penthouse">Penthouse</option>
                          <option value="duplex">Duplex</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {stepIndex === 1 && (
                  <div className="list-unit-grid two-col">
                    <div className="field">
                      <label htmlFor="lu-year" className="casko-font">
                        Year of Build
                      </label>
                      <div className="input-row">
                        <Calendar size={18} />
                        <input
                          id="lu-year"
                          type="number"
                          value={form.yearBuilt}
                          onChange={onChange('yearBuilt')}
                          placeholder="e.g., 2022"
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="lu-sqft" className="casko-font">
                        Square Feet
                      </label>
                      <div className="input-row">
                        <Maximize2 size={18} />
                        <input
                          id="lu-sqft"
                          type="number"
                          value={form.squareFeet}
                          onChange={onChange('squareFeet')}
                          placeholder="e.g., 1900"
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="lu-beds" className="casko-font">
                        Bedrooms
                      </label>
                      <div className="input-row">
                        <BedDouble size={18} />
                        <input
                          id="lu-beds"
                          type="number"
                          value={form.bedrooms}
                          onChange={onChange('bedrooms')}
                          placeholder="e.g., 3"
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="lu-baths" className="casko-font">
                        Bathrooms
                      </label>
                      <div className="input-row">
                        <Bath size={18} />
                        <input
                          id="lu-baths"
                          type="number"
                          value={form.bathrooms}
                          onChange={onChange('bathrooms')}
                          placeholder="e.g., 2"
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="lu-parking" className="casko-font">
                        Parking
                      </label>
                      <div className="input-row">
                        <Car size={18} />
                        <input
                          id="lu-parking"
                          type="number"
                          value={form.parking}
                          onChange={onChange('parking')}
                          placeholder="e.g., 1"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {stepIndex === 2 && (
                  <div className="list-unit-grid">
                    <div className="field">
                      <label htmlFor="lu-price" className="casko-font">
                        Asking Price
                      </label>
                      <div className="input-row">
                        <Banknote size={18} />
                        <input
                          id="lu-price"
                          type="text"
                          value={form.price}
                          onChange={onChange('price')}
                          placeholder="e.g., EGP 8,900,000"
                        />
                      </div>
                    </div>

                    <div className="field full">
                      <label htmlFor="lu-images" className="casko-font">
                        Upload Images
                      </label>
                      <label className="upload-area" htmlFor="lu-images">
                        <div className="upload-icon">
                          <UploadCloud size={22} />
                        </div>
                        <div className="upload-copy">
                          <span className="upload-title casko-font">
                            Drag & drop photos, or click to upload
                          </span>
                          <span className="upload-subtitle">
                            JPG/PNG recommended. Multiple images supported.
                          </span>
                          {files.length > 0 && (
                            <span className="upload-files">
                              {files.length} file{files.length === 1 ? '' : 's'} selected
                            </span>
                          )}
                        </div>
                        <input
                          id="lu-images"
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={onFilesSelected}
                        />
                      </label>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="list-unit-actions">
              <button
                type="button"
                className={canGoBack ? 'btn-ghost' : 'btn-ghost is-disabled'}
                onClick={goBack}
                disabled={!canGoBack}
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>

              {canGoNext ? (
                <button type="button" className="btn-primary" onClick={goNext}>
                  <span>Next</span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button type="submit" className="btn-primary">
                  <span>Submit Unit</span>
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

